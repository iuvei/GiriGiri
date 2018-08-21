<template>
  <ul class="video-list">
    <li
      class="video-item"
      v-for="(video, index) in videos"
      :key="video.aid"
    >
      <!-- 排名 -->
      <div class="rank">
        <span
          :class="getRankingClass(index)"
          v-text="getRankingText(index)">
        </span>
      </div>
      <!-- 封面 -->
      <div class="cover-wrapper">
        <img v-lazy="video.pic" alt="cover" />
      </div>
      <!-- 详情 -->
      <div class="info">
        <h2 class="title">{{ video.title }}</h2>
        <p class="author">
          <i class="icon-author" />
          <span>{{ video.author }}</span>
        </p>
        <div class="video-dec">
          <span class="desc-tab">
            <i class="icon-watch" />
            <span class="video-play" v-text="_formatNumber(video.play)" />
          </span>
          <span class="desc-tab">
            <i class="icon-align-left" />
            <span class="video-review" v-text="_formatNumber(video.video_review)" />
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    videos: { type: Array, default: () => [] },
    rank: { type: Boolean, default: true } // 排行奖杯图片
  },
  methods: {
    _formatNumber(num) {
      num = Number(num);
      if (num < 10000) {
        return `${num}`;
      }
      return `${(num / 10000).toFixed(1)}万`;
    },
    getRankingNum(index) {
      if (index > 2) {
        return `<span class="text">${index + 1}</span>`;
      }
      return `<span class="icon rank${index + 1}" />`;
    },
    getRankingClass(index) {
      if (index <= 2) {
        return `icon rank${index + 1}`;
      } else {
        return 'text';
      }
    },
    getRankingText(index) {
      if (index > 2) {
        return index + 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'common/scss/const.scss';
@import 'common/scss/mixins.scss';

.video-list {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  .video-item {
    display: flex;
    flex-direction: row;
    margin-top: 0.8rem;
    width: 100%;
    height: 3.6rem;
    .rank {
      flex: 10;
      height: 100%;
      padding: 0 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 100%;
        height: 100%;
        background-size: 1rem 1.75rem;
        background-repeat:no-repeat;
        background-position:center center;
        &.rank1 {
          background-image: url('../../common/img/rank1.png');
        }
        &.rank2 {
          background-image: url('../../common/img/rank2.png');
        }
        &.rank3 {
          background-image: url('../../common/img/rank3.png');
        }
      }
      .text {
        text-align: center;
        font-size: $font-size-small;
      }
    }
    .cover-wrapper {
      flex: 40;
      margin-right: 0.5rem;
      overflow: hidden;
      border-radius: 0.3rem;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        text-align: left;
      }
    }
    .info {
      flex: 50;
      margin-right: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        flex: 2;
        max-height: 1.5rem;
        line-height: 0.75rem;
        font-size: $font-size-small;
        text-align: left;
        word-break: break-all;
        @include no-wrap-multi(2);
      }
      .author {
        flex: 1;
        max-height: 0.5rem;
        font-size: $font-size-small-s;
        color: $color-text-gray;
        display: flex;
        align-items: center;
        span {
          padding-left: 0.2rem;
        }
      }
      .video-dec {
        flex: 1;
        max-height: 0.5rem;
        display: flex;
        font-size: $font-size-small-s;
        justify-content: flex-start;
        color: $color-text-gray;
        .desc-tab {
          padding-right: 0.5rem;
          span {
             padding-left: 0.1rem;
          }
        }
      }
    }
  }
}

</style>