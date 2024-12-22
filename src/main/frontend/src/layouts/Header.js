import React from "react";
import { Navbar, NavbarBrand, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom"; // useNavigate import
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const handleTitleClick = () => {
    navigate("/todo_list"); // /starter 경로로 이동
  };

  return (
      <Navbar color="primary" dark expand="md" className="fix-header">
        {/* 모바일 메뉴 버튼 */}
        <Button
            color="primary"
            className="d-lg-none me-3"
            onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>

        {/* 중앙 정렬된 아이콘 및 텍스트 */}
        <Container className="d-flex justify-content-center align-items-center">
          <img
              src={user1}
              alt="profile"
              className="rounded-circle me-2"
              width="40"
              height="40"
          />
          <span
              style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer", // 클릭 가능하게 변경
              }}
              onClick={handleTitleClick} // 클릭 이벤트 추가
          >
          My Scheduler
        </span>
        </Container>
      </Navbar>
  );
};

export default Header;
