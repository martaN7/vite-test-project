import React, {useState} from 'react';
import { TextField } from '@mui/material';

export default function Tags(props) {

    const [tags, setTags] = useState(props.tags);

	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};

  return (
    <div className='tags__input__container'>
        {tags.map((tag, index) => (
					<div key={index} className="tag__single">
						<span className='tag__title'>{tag}</span>
						<span className='tag__icon-close' onClick={() => removeTags(index)}>
							x
						</span>
					</div>
				))}
      <input type='text' className='input' placeholder='Enter tags'
      onKeyUp={event => event.key === "Enter" ? addTags(event) : null} 
      />
    </div>
  )
}
