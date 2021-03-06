import React from 'react';
import '../../custom.scss';
import './styles.scss';
import Block from '../Block';
import Button from '../Button';
import MemberIcon from './MemberIcon.js'
import LoadingIcon from '../LoadingIcon'



const TeamBlock = props => {

  let { title, data, blockClass, theme="seconrdary" } = props;
  const spacer = <div className="d-none d-md-block col-1"/>
  const dummy = i => <div key={`TeamBlockDummy-${i}`} className="profile dummy"/>
  // data = Array.from(data);

  var filler;
  if (data) {
    const rowWidth = window.innerWidth >= 768 ? 
      (window.innerWidth - 32 - 60) * .833 :
      window.innerWidth - 32;
    const lenRow = Math.floor(rowWidth / 200)
    const lenLastRow = data.length % lenRow;
    const lastRowResidual = lenRow - lenLastRow;
    // console.log("lenRow", lenRow, "lenLastRow", lenLastRow, "lastRowResidual", lastRowResidual);
    const temp = []
    for (var i = lastRowResidual - 1; i >= 0; i--) {
      temp.push(true);
    }
    filler = temp.fill().map((_, i) => dummy(i));
    // console.log("rowWidth", rowWidth, "lenRow", lenRow, "lenLastRow", lenLastRow);
  }

  return (
    <Block theme={theme} className={`teamBlock ${blockClass}`}>
      { spacer }
      <div className="col-12 col-md-10">
        {
          title && 
          <div className="text-left mb-4 title">
            <h2 className="mb-0">{ title }</h2>
          </div>
        }
        {
          data && data.length ?
            <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
              { data.map((brother, i) => <MemberIcon 
                  key={`${title.split(' ').join('')}-${brother.key}`} 
                  brother={brother}
                  />) }
              { filler }
            </div> :
            <LoadingIcon customClass="p-3" />
        }
      </div>
      { spacer }
    </Block>
  );
}


export default TeamBlock;
