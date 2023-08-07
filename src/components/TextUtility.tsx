import React, { ChangeEvent, useState } from 'react'
import TextSummary from './TextSummary';
import Alert from './Alert';

export default function TextUtility(props: TextUtilityProps) {

  const [textToAnalyze, setTextToAnalyze] = useState('');

  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const [originalText, setOriginalText] = useState('');

  const handleOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOriginalText(event.target.value);
    setTextToAnalyze(event.target.value);
  };

  const handleUpperCase: () => void = () => {
    setTextToAnalyze(textToAnalyze.toUpperCase());
  };

  const handleLowerCase: () => void = () => {
    setTextToAnalyze(textToAnalyze.toLowerCase());
  };

  const handleOriginalText: () => void = () => {
    setTextToAnalyze(originalText);
  };

  const handleCopytext: () => void = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(textToAnalyze);
    } else {
      document.execCommand('copy', true, textToAnalyze);
    }
    setShowCopyAlert(true);
  };

  const handleReset: () => void = () => {
    setTextToAnalyze('');
    setOriginalText('');
  };

  return (
    <>
      {
        showCopyAlert &&
        <div className="container my-3">
          <Alert message='Text copied to clipboard' variant='success' toggleAlert={setShowCopyAlert}></Alert>
        </div>
      }
      <div id="liveAlertPlaceholder"></div>
      <div className='container'>
        <h1 className='my-3'>
          {props.heading}
        </h1>
        <div className="form">
          <textarea className="form-control" placeholder="Start Typing..." id="floatingTextarea"
            rows={props.rows}
            value={textToAnalyze}
            onChange={handleOnChange}>
          </textarea>
        </div>
      </div>
      <div className="container my-4">
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button type="button" className={`btn btn-primary mx-1 ${textToAnalyze.length ? '' : ' disabled'}`} onClick={handleCopytext}>Copy Text</button>
        <button type="button" className={`btn btn-success float-end ${textToAnalyze.length ? '' : ' disabled'}`} onClick={handleReset}>Clear</button>
        <button type="button" className={`btn btn-success float-end mx-2 ${textToAnalyze.length ? '' : ' disabled'}`} onClick={handleOriginalText}>Reset to Original Text</button>
      </div>

      <div className="container my-9">
        <TextSummary heading='Text Summary' text={textToAnalyze} />
      </div>
    </>
  )
}

type TextUtilityProps = {
  heading: string;
  rows: number;
};

TextUtility.defaultProps = {
  heading: 'Modify Text',
  rows: 5
};