import Link from 'next/link'
import { MouseEvent } from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

const FABUnstyled = ({
  className,
  to = "",
  onClick,
  Icon
}: {
  className?: string
  to?: string
  onClick?: () => void
  Icon: IconType
}) => {
  return (
    <button className={className} onClick={onClick}>
        <Link href={to}>
            <a>
                <Icon/>
            </a>
        </Link>
    </button>
  )
}

export const FAB = styled(FABUnstyled)<{
  diameter?: number
  color?: string
  backgroundColor?: string
  colorOnHover?: string
  backgroundColorOnHover?: string
}>`
  width: ${props => (props.diameter ? props.diameter * 0.6 + 'px' : '80px')};
  height: ${props => (props.diameter ? props.diameter * 0.6 + 'px' : '80px')};

  border-radius: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 5%;
  right: 5%;
  position: absolute;

  transition: 0.5s;

  @media ${props => props.theme.breakpoints.mobileL} {
    width: ${props => (props.diameter ? props.diameter * 0.75 + 'px' : '80px')};
    height: ${props => (props.diameter ? props.diameter * 0.75 + 'px' : '80px')};

    padding: 8px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: ${props => (props.diameter ? props.diameter + 'px' : '80px')};
    height: ${props => (props.diameter ? props.diameter + 'px' : '80px')};
  }

  &:hover {
    background-color: ${props =>
      props.backgroundColorOnHover || props.theme.colors.white};

    & > a {
      color: ${props => props.colorOnHover || props.theme.colors.black};
    }
  }

  & > a {
    font-size: ${props => props.diameter ? (props.diameter/43) + 'rem' : '2.8rem'};
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.color || props.theme.colors.white};

    @media ${props => props.theme.breakpoints.mobileL} {
      font-size: ${props => props.diameter ? (props.diameter/35) + 'rem' : '3rem'};
    }

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: ${props => props.diameter ? (props.diameter/27) + 'rem' : '3.2rem'};
    }
  }
`
