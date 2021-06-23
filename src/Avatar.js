import styled, { css } from "styled-components";

const size = "100px";

const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #26d701;
`;

const activeStyles = css`
  background: #121212;
  &:before {
    content: "";
    display: block;
    position: absolute;
    opacity: 0.3;
    top: -2px;
    left: -2px;
    width: calc(100% + 14px);
    height: calc(100% + 14px);
    border-radius: 50%;
    background: linear-gradient(45deg, #4ded30, #b7ffbf);
  }
  &&:hover {
    cursor: pointer;
  }
`;

const StyledAvatar = styled.span`
  display: block;
  position: relative;
  width: ${(props) => props.width || size};
  height: ${(props) => props.height || size};
  padding: 5px;
  border-radius: 50%;

  ${(props) => props.isActive && activeStyles}
`;

const StyledImage = styled.img`
  ${sharedStyles};
  object-fit: cover;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  ${sharedStyles}
`;

const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 4px solid #121212;
  background: #4ded30;
`;

const Avatar = ({ isActive, hasBadge, name, src, width, height }) => {
  return (
    <StyledAvatar isActive={isActive} width={width} height={height}>
      {hasBadge && <StyledBadge />}
      {src ? <StyledImage src={src} /> : <StyledSpan>{name}</StyledSpan>}
    </StyledAvatar>
  );
};

export default Avatar;
