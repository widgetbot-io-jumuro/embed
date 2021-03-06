import { connect } from 'fluent'
import * as React from 'react'
import { ScrollOverlay } from 'styled-elements/scrollable'

import ChannelCategory from './Category'
import { Root } from './elements'
import Header from './Header'
import Panel from './Panel'

export default connect()
  .with(({ state, signals, props }) => ({
    categories: state.categories.get(),
    activeChannel: state.activeChannel,
    visible: state.visible.channels
  }))
  .toClass(
    props =>
      class Channels extends React.PureComponent<typeof props> {
        render() {
          const { visible, categories, activeChannel } = this.props

          return (
            <Root visible={visible} className="channels">
              <Header />
              <ScrollOverlay>
                {categories.map((category, i) => (
                  <ChannelCategory
                    category={category}
                    activeChannel={activeChannel}
                    key={i}
                  />
                ))}
              </ScrollOverlay>
              <Panel />
            </Root>
          )
        }
      }
  )
