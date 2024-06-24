import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>ホームページ</h1>
      <p>
        こんにちは、{user.name}
        さん。こちらはホームページです。Reactの`useContext`フックを使って、このページとAboutページ間でユーザー名を共有します。
      </p>
    </div>
  );
};

export default HomePage;
