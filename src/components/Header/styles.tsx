import { ReactNode } from 'react'
import styled from 'styled-components'

const HeaderContainerUnstyled = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  )
}

export const HeaderContainer = styled(HeaderContainerUnstyled)<{
  fixed?: boolean
}>`
  height: 70px;
  width: 100%;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1.);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);

  color: ${props => props.theme.colors.white};

  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  top: 0;
  z-index: 1;

  padding: 10px ${props => (props.fixed ? '30px' : '13px')} 10px 20px;

  & > div {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }
`

export const OptionsWrapper = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 30px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    gap: 50px;
  }
`
