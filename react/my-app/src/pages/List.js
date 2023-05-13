import React from 'react';
//UserList component의 sub
const User = (props)=>{
//    console.log(userData);
    return(
        <tr>
            <td>{props.userData.name}</td>
            <td>{props.userData.email}</td>
        </tr>
    );
}
const List = ()=>{
//db에서 받아온 데이터의 예시
    const users = [
        {email:'u@naver.com', name:'유재석'},
        {email:'k@naver.com', name:'김종국'},
        {email:'h@naver.com', name:'하하'},
        {email:'s@naver.com', name:'송지효'}
    ];
    // 배열에서 map으로 User컴포넌트를 사용
    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <User userData={user}/>)}
            </tbody>
        </table>
    );
}

export default List;