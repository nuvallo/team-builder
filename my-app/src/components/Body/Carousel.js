import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://source.unsplash.com/user/erondu/1200x300",
    header: "Become Part Of Our Team!",
    key: "3"
  },
  {
    src: "https://source.unsplash.com/collection/190727/1200x300",
    header: "Amazing Food!",
    key: "3"
  },
  {
    src: "https://source.unsplash.com/1200x300/?nature,water",
    header: "Amazing Time!",
    key: "3"
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
