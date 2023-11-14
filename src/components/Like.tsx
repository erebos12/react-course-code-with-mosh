import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";

interface LikeProps {
  initStatus: boolean;
  onClick: () => void;
}

const Like = ({ initStatus, onClick }: LikeProps) => {
  const [status, setStatus] = useState(initStatus);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillLike size={20} onClick={toggle} />;
  return <AiOutlineLike size={20} onClick={toggle} />;
};

export default Like;
