import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Home from '../home/Home'

const panes = [
  {
    menuItem: 'Home',
    render: () => <Tab.Pane attached={false}><Home /></Tab.Pane>,
  },
  {
    menuItem: 'About Me',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Projects',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

class TabSetUp extends Component {
  state = { color: 'red' }

  render() {
    const { color } = this.state

    return (
      <div>

        <Tab
          menu={{ color, inverted: true, attached: false, tabular: false }}
          panes={panes}
        />
      </div>
    )
  }
}

export default TabSetUp