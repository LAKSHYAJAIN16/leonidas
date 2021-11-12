import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

import leonidas from './leonidas-parser';
import { trim_leonidas } from './leonidas-parser';
import useLeonidasCallback from './useLeonidasCallback';

export default function Leonidas
    (
        { text, useHtml = true, className = "default", plainMarkdown = false, sourcePos = false, rawSourcePos = false, components = {}, unwrapDisallowed = false }
    ) {
    //Leonidas refs
    const [remarkModules, setRemarkModules] = useState([]);
    const [rehypeModules, setRehypeModules] = useState([]);
    const [called, setCalled] = useState(false);

    useLeonidasCallback(() => {
        if (!plainMarkdown) {
            //Get our entire Description Object
            const desc_object = document.getElementsByClassName(className);
            const nodes = [];

            //Get All the Child nodes
            if (desc_object[0]) {
                const child_nodes = desc_object[0].childNodes;
                child_nodes.forEach((e) => {
                    nodes.push(e);
                    e.childNodes.forEach((f) => {
                        nodes.push(f);
                        f.childNodes.forEach((h) => {
                            nodes.push(h);
                        })
                    })
                })

                let style = desc_object[0].style;
                const leo = leonidas(text, style);
                style = leo.values;
                if (called === false) {
                    setRehypeModules(leo.modules.rehype);
                    setRemarkModules(leo.modules.remark);
                    setCalled(true);
                }
            }
        }
    })

    return (
        <div>
            <div className={className}>
                <ReactMarkdown
                    children={trim_leonidas(text)}
                    skipHtml={useHtml}
                    rehypePlugins={rehypeModules}
                    remarkPlugins={remarkModules}
                    unwrapDisallowed={unwrapDisallowed}
                    components={components}
                    sourcePos={sourcePos}
                    rawSourcePos={rawSourcePos}
                />
            </div>
        </div>
    )
}
