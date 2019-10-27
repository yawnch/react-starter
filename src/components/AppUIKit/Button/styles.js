import React from 'react'
import styled, { css } from 'styled-components'
import 'focus-visible'

import { Breakpoints, Colors, Type } from 'app/styles'

const ButtonCleanProps = ({ loading, disabled, buttonName, options, ...rest }) => (
  <button {...rest} />
)

export const Button = styled(ButtonCleanProps)`
  font-family: ${Type.fontFace};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background 275ms ease;
  height: 55px;
  color: ${Colors.beige20};
  background: ${Colors.brand10};
  border-radius: 36px;
  min-width: 268px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background: ${Colors.brand20};
  }

  &:active {
    background: ${Colors.brand30};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(212, 175, 255, .95);
  }

  &:focus:not(.focus-visible) {
    outline: none;
    box-shadow: none;
  }

  ${props => props.disabled && css`
    opacity: .1;
    pointer-events: none;
  `}

  ${props => props.options?.theme === 'secondary' && css`
    background: ${Colors.gray10};
    color: ${Colors.brand10};

    &:hover {
      background: ${Colors.gray10};
    }
  `}

  ${props => props.options?.size === 'small' && css`
    height: 45px;
    min-width: auto;
  `}

  @media(max-width: ${Breakpoints.main}) {
    height: 45px;
    min-width: auto;
  }
`

export const ButtonText = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;

  ${props => props.options?.size === 'small' && css`
    font-size: 16px;
  `}

  @media(max-width: ${Breakpoints.main}) {
    font-size: 16px;
  }
`
