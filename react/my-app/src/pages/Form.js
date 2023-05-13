import React,{useState} from 'react';
const Form = ()=>{
    //Object형식
    let [inputs, setInputs] = useState({
        name:"",
        email:"",
        tel:"",
    });
    //inputs Object의 값을 복사해 사용하도록 지정
    let {name,email,tel} = inputs;
    //event function
    const formChange = (e)=>{
        //target의 id와 value
        let value = e.target.value;
        let id = e.target.id;
        setInputs({
            //...는 위의 name,email,tel이 inputs Object에서 분해되어 입력된다.
            //해당하는 id값의 value수정
            ...inputs,
            [id]:value
        });
    }
    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" value={name} id="name" onChange={formChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" value={email} id="email" onChange={formChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" value={tel} id="tel" onChange={formChange}/>
            </div>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{tel}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Form;