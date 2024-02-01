import React from 'react'
import Footer from './Footer'
import "./css/faq.css";

export default function FAQ() {
    const faq = [
        ['Question?', 'Answer'],
        ['Question?', 'Answer'],
        ['Question?', 'Answer'],
        ['Question?', 'Answer'],
        ];
    return (
    <div className="faq">
        <div className="middle">
            <div className="bottom">
                <h2>Frequently Asked Questions</h2>
                <div>
                {
                    faq.map((textArr, index) => {
                        const question = textArr[0];
                        const answers = textArr.slice(1);
                        return <div className="faqna" key={index}>
                                <h3>
                                    <svg class="faqimg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    {question}
                                </h3>
                                <ul className="max-w-md text-gray-500 list-disc">
                                    {
                                        answers.map(answer => {return <li className="ml-10">{answer}</li>;})
                                    }
                                </ul>
                            </div>
                            ;
                        })
                } 
                </div>
            </div>
        </div>
    <Footer />
    </div>
    );
}