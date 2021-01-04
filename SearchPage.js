import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="//source.unsplash.com/416x300/?guy?2"
        channel="Clever Programmer"
        verified
        subs="659k"
        noOfVideos={382}
        description="You can find awesome programing lessons here"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659"
        description="Do you want to become a clever programmer? Guys we've got your back"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="We have built a new website today"
        image="//source.unsplash.com/416x300/?film?2"
      />
      <VideoRow
        views="1.4M"
        subs="659"
        description="Do you want to become a clever programmer? Guys we've got your back"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="We have built a new website today"
        image="//source.unsplash.com/416x300/?boat?2"
      />
      <VideoRow
        views="1.4M"
        subs="659"
        description="Do you want to become a clever programmer? Guys we've got your back"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="We have built a new website today"
        image="//source.unsplash.com/416x300/?computer?2"
      />
      <VideoRow
        views="1.4M"
        subs="659"
        description="Do you want to become a clever programmer? Guys we've got your back"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="We have built a new website today"
        image="//source.unsplash.com/416x300/?fruit?2"
      />
      <VideoRow
        views="1.4M"
        subs="659"
        description="Do you want to become a clever programmer? Guys we've got your back"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="We have built a new website today"
        image="//source.unsplash.com/416x300/?space?2"
      />
      <VideoRow
        views="1.4M"
        subs="659"
        description="Do you want to become a clever programmer? Guys we've got your back"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="We have built a new website today"
        image="//source.unsplash.com/416x300/?trees?2"
      />
    </div>
  );
}

export default SearchPage;
