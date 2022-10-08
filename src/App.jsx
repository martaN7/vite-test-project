import { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import './styles/main.scss';
import 'react-quill/dist/quill.snow.css';
import Tags from './Tags';
import { TextField } from '@mui/material';




function App() {

  const [value, setValue] = useState('');
  const [text, setText] = useState('');

  const editorRef = useRef();

  useEffect(() => {
    console.log("renderuję się");
    console.log(editorRef.current);
  });
  
  const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ size: []}],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link"],
        ["clean"],
    ],
};

const displayText = () => {
  setText(value);

}

  return (
    <div>
      {/* {console.log(value)} */}
      <h1>Testing React Quill</h1>
      <ReactQuill theme="snow" modules={modules} ref={editorRef} placeholder='Napiszże coś' className='editor' />
      {/* <div dangerouslySetInnerHTML={{ __html: value}}>
      </div> */}
      <button onClick={displayText}>Display text</button>
      <div dangerouslySetInnerHTML={{ __html: editorRef.current}}></div>
      <div>{editorRef.current}</div>
      <h1>Enter some tags</h1>
      <Tags tags={['Nodejs', 'MongoDB']}/>
    </div>
  )
}

export default App
