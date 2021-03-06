import styled from 'typed-emotion'

export const Emote = styled('img')`
  width: 1em;
  height: 1em;
  margin: 0px 0.05em 0px 0.1em;
  vertical-align: -0.1em;

  &.error {
    display: inline-block;
    color: transparent;
    transform: scale(0.01);
    margin: 0 -17px;

    &::after {
      display: inline-block;
      transform: scale(100);
      content: attr(alt);
      color: #fff;
    }
  }
`
