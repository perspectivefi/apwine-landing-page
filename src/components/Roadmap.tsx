import React from "react"

import CryptoIcon from "./CryptoIcon"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import { FaFileContract } from "react-icons/fa"

const Milestone = ({ date, name, icon, done = false }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgb(23, 20, 42)",
      "md:box-shadow": done ? "0px 0px 48px rgba(91, 65, 245, 0.5)" : "",
      "box-shadow": done ? "0px 0px 26px rgba(91, 65, 245, 0.5)" : "",
    }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(23, 20, 42)" }}
    iconStyle={{
      background: "rgb(23, 20, 42)",
      color: "#fff",
    }}
    icon={icon}
  >
    <h3 className="text-white font-bold text-lg">{date}</h3>
    <h4 className="text-primary-100">{name}</h4>
  </VerticalTimelineElement>
)

const Roadmap = () => (
  <div className="">
    <div className="max-w-2xl mx-auto">
      <p className="text-center text-white text-3xl font-bold mb-4">Roadmap</p>
      <p className="text-center text-primary-100 mb-8">
        This is the roadmap we expect to follow in 2021. Every change and
        decisions for the roadmap will be discussed in our govermance forum.
      </p>
    </div>
    <VerticalTimeline>
      <Milestone
        date="November 2020"
        name="Pre-Seed"
        icon={<CryptoIcon icon="apwine" />}
        done
      />
      <Milestone
        date="December 2020"
        name="Alpha V2.0 Launch"
        icon={<CryptoIcon icon="aave" />}
        done
      />
      <Milestone
        date="January 2021"
        name="Audit Phase and Mainnet Release"
        icon={<FaFileContract />}
      />
      <Milestone
        date="February 2021"
        name="Seed"
        icon={<CryptoIcon icon="apwine" />}
      />
    </VerticalTimeline>
  </div>
)

export default Roadmap
