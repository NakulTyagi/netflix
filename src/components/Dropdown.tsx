import React, { useState } from 'react';
import DownIcon from '@mui/icons-material/ArrowDropDown';
import LinesEllipsis from 'react-lines-ellipsis';
import './Banner.css';

export default function Dropdown({genres, selectedValue}:any) {
  const [selected, setSelect] = useState('');
  const [dropClick, setDropClick] = useState(false);

  const handleChange = (genre: string) => {
    setSelect(genre);
    selectedValue(genre);
    setDropClick(false);
  };

  return (
    <div style={{position:'relative'}}>
      <div
        onClick={()=>setDropClick(!dropClick)}
        style={{ minWidth: 160, maxWidth: 160, minHeight: 52, cursor: 'pointer',border: '2px solid white', borderRadius: 4, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <LinesEllipsis
              text={selected || 'Genres'}
              maxLine={'1'}
              ellipsis='...'
              trimRight
              basedOn='letters'
              style={{
                color: '#FFF',
                fontSize: '18px',
                fontWeight: 500,
            }}
          />
        <DownIcon style={{height: 20, width: 20, color:'white'}}/>
      </div>

      {dropClick && <div style={{position:'relative', cursor:'pointer', borderRadius: 12, backgroundColor:'black', zIndex:100, maxHeight: 200, display:'flex', flexDirection:'column', flexWrap:'wrap', color:'white'}}>
        {genres.map((genre)=>{
          return <div
            className='genre'
            onClick={()=>handleChange(genre)}
            style={{width:200, height: 40, display:'flex', borderRadius:2, justifyContent:'center', alignItems:'center'}}
          >
            {genre}
          </div>
        })}
      </div>}
    </div>
  );
}
