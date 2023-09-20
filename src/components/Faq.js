import React, { useState } from 'react';

export const FAQ = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: "How do I pay?",
      answer: "When a contract is signed a deposit of half the project cost will be paid upfront and after I complete your website the other half will then be charged. This will either be through check or by using a primary credit card."
    },
    {
      question: "Where did you study?",
      answer: "I studied Software Engineering at Florida Gulf Coast University."
    },
    {
      question: "How long have you been coding?",
      answer: "I've been coding for over 5 years now in the professional industry."
    },
    // ... add more questions as needed
  ];

  const closeModal = () => {
    setSelectedQuestion(null);
  };


  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2><b>FAQs</b></h2>
              <p>Questions not answered here? Feel free to message me and I'll get back to you within 24 hours!</p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {questions.map((item, index) => (
            <div key={index} className="col-md-4 d-flex flex-column align-items-center mb-4">
              <div 
                style={{
                  width: '250px',
                  height: '120px',
                  borderRadius: '15px',
                  border: '2px solid black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  overflow: 'hidden',
                  padding: '10px',
                  textAlign: 'center',
                  transition: '0.3s',
                }}
                onClick={() => setSelectedQuestion(index)}
              >
                {item.question}
              </div>
            </div>
          ))}
        </div>

        {selectedQuestion !== null && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              width: '80%',
              maxWidth: '500px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              position: 'relative'
            }}>
              <button onClick={closeModal} style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
              }}>X</button>
              <p>{questions[selectedQuestion].answer}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}