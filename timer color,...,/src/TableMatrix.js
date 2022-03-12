import React from "react";

export default function TableMatrix({ matrix }) {
    console.log(matrix);
  return (
    <table>
      <thead>
        <tr>
            {matrix[0].map((item, index) => {
                    return <th key={index}>{item}</th>;
            })}
        </tr>
      </thead>
      <tbody>
            {matrix.map((item, index) => {
                console.log(item,index);
                if(index>0){
                    return (
                        <tr key={index}>
                               {(item.map((el,i)=>{
                                   console.log(el);
                                   return (<td key={i}>{el}</td>)
                               }))}
                        </tr>
                    );
                }
                return true;
            })}
      </tbody>
    </table>
  );
}
