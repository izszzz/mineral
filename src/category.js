import React from "react"
import ReactDOM from "react-dom"
//import "./btn/BasicBtn/BasicBtn"
//import "./btn/FollowBtn/FollowBtn"
//import "./chat/BasicMessage/BasicMessage"
//import "./dropdown/BasicDropdown/BasicDropdown"
//import "./modal/BasicModal/BasicModal"
//import "./gauge/BasicGauge/BasicGauge"
//import "./points/BattlePoints/BattlePoints"
//import "./tooltip/BasicTooltip/BasicTooltip"
export default {
  btn: {
    BasicBtn: <basic-btn label="basicbtn" />,
    FollowBtn: <follow-btn />,
  },
  tooltip: {
    BasicTooltip: (
      <basic-tooltip text="this is tooltip" position="bottom">
        <basic-btn label="tooltip" slot="target" />
      </basic-tooltip>
    ),
  },
  dropdown: {
    BasicDropdown: (
      <basic-dropdown>
        <basic-btn slot="target" label="dropdown"></basic-btn>
        <ul slot="lists">
          <basic-dropdown-list
            text="ドロップ"
            path="#ドロップ"
          ></basic-dropdown-list>
          <basic-dropdown-list
            text="ダウン"
            path="#ダウン"
          ></basic-dropdown-list>
          <basic-dropdown-list text="かも" path="#かも"></basic-dropdown-list>
        </ul>
      </basic-dropdown>
    ),
  },
  modal: {
    BasicModal: (
      <>
        <basic-btn
          label="basicmodal"
          onClick={e => {
            const slot = (
                <>
                  <span slot="title"> this is title</span>
                  <p slot="content">this is content</p>
                </>
              ),
              modal = document.getElementsByTagName("basic-modal")[0]
            modal.setAttribute("active", "")
            ReactDOM.render(slot, modal)
          }}
        />
        <basic-modal />
      </>
    ),
  },
  gauge: {
    BasicGauge: <basic-gauge max-points="120" now-points="110" width="150" />,
  },
  points: {
    BattlePoints: <battle-points max-points="5" now-points="4" />,
  },
  chat: {
    BasicMessage: (
      <div>
        <basic-chat-message
          color="lightgray,lightskyblue"
          text="Hello! Are you enjoy Mineral.web?"
          position="right"
        />
        <basic-chat-message
          color="lightgray,lightskyblue"
          text="Please Enjoy!"
          position="left"
        />
      </div>
    ),
  },
}
