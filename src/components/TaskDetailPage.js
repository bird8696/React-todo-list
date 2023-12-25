// TaskDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailPage = ({ taskList }) => {
  const { id } = useParams();
  const taskObj = taskList[id];

  if (!taskObj) {
    return <div>작업이 없습니다.</div>;
  }

  return (
    <div>
      <h1>{taskObj.Name}</h1>
      <p>{taskObj.Description}</p>
      {/* 이곳에 필요한 디자인 및 스타일을 추가하세요 */}
    </div>
  );
};

export default TaskDetailPage;
