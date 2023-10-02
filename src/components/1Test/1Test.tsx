// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.
// По возможности пришлите Ваш вариант в https://codesandbox.io

import React, { MouseEvent, memo, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};

type User = {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: Company;
    address: string | {} | []
};

type IButtonProps = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ onClick }: IButtonProps): JSX.Element {
    return (
        <button type="button" onClick={onClick}>
            get random user
        </button>
    );
}

type IUserInfoProps = {
    user: User|null;
}

const UserInfo=memo(function UserInfo({ user }: IUserInfoProps): JSX.Element {
    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user?.name}</td>
                    <td>{user?.phone}</td>
                </tr>
            </tbody>
        </table>
    );
})

export function App22(): JSX.Element {
    const [item, setItem] = useState<User|null>(null);

    const receiveRandomUser = async () => {
        const id = Math.floor(Math.random() * (10 - 1)) + 1;
        const response = await fetch(`${URL}/${id}`);
        const _user = (await response.json()) as User;
        setItem(_user);
    };

    const handleButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        receiveRandomUser();
    };

    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={handleButtonClick} />
            <UserInfo user={item} />
        </div>
    );
}
