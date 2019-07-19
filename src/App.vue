<template>
  <div id="app">

    <!--<div class="screen">-->
      <!--<div class="screen__left">left</div>-->
      <!--<div class="screen__main">-->
        <!--<div class="screen__top">-->
          <!--<div class="screen__header" v-sync-scroll="'grid'">-->
            <!--<timeline :items="items"></timeline>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="screen__center" v-sync-scroll="'grid'" @scroll="onScroll">-->
          <!--<div class="screen__center-content">-->
            <!--<grid ref="grid"></grid>-->
            <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea magnam magni minima molestias quidem sed unde veniam voluptas voluptates! Amet eveniet in iste, provident suscipit vitae. Dicta eius explicabo ipsam itaque quod reiciendis rerum tenetur ut vel vero! Aut illo iusto nemo obcaecati quas quod ratione temporibus unde velit voluptatibus. Accusamus aut beatae blanditiis consectetur dolore dolorem eligendi fugiat ipsam iste itaque, iusto magni natus nesciunt odio perspiciatis quis quisquam ratione ullam? Ab dolorem doloremque dolores ducimus et ipsam iste nobis perspiciatis quae, voluptates. Quod, rem, voluptas! Aliquam atque autem delectus dolore doloribus est, facilis fugit, inventore magnam nesciunt nobis obcaecati odio omnis placeat qui, reiciendis repellendus saepe sapiente suscipit voluptates. Placeat ut, veritatis. Accusantium aperiam, beatae cupiditate dignissimos dolorem ducimus eaque esse, est expedita illo libero maxime mollitia nostrum omnis placeat porro praesentium quae quia ratione rerum sed vel voluptatibus voluptatum? Animi doloremque eveniet, fuga ipsam neque officiis perspiciatis praesentium quam quas, quisquam quo tempore temporibus unde ut voluptate. Ab ad alias aspernatur commodi delectus dicta ea earum mollitia non, officia reprehenderit sapiente tempora voluptates. Adipisci consectetur inventore maxime quam quibusdam quod, quos sint. Amet at beatae consectetur corporis deleniti deserunt exercitationem iure nobis sint unde? Accusantium at corporis distinctio ea illum in ipsa iste laborum, laudantium natus optio perspiciatis, quas saepe veniam voluptate. Autem consequuntur dicta ea est eum hic modi omnis saepe, tenetur! Alias amet aperiam atque consequatur dicta eveniet explicabo impedit ipsum laudantium maxime, quaerat quod saepe sequi sint voluptatibus. Dolorem eaque eligendi in iusto magni maxime odit possimus quam repellendus reprehenderit! Cumque laborum necessitatibus nihil nostrum numquam repudiandae, vero? A ad atque deleniti dicta dignissimos dolores ducimus excepturi illo itaque iusto maxime molestiae molestias, nesciunt quasi quibusdam quidem quod sed sint tempore totam unde velit voluptas. Ea eius eos et id iste nobis placeat ut vero. Accusamus consequatur dolor eligendi explicabo fuga ipsum maxime porro reiciendis saepe suscipit. Aliquam animi at beatae consectetur corporis cumque cupiditate debitis dignissimos dolor doloremque ea eius eligendi error est excepturi fuga fugiat laborum laudantium nam odio optio perferendis placeat qui, quia quidem quod recusandae repellendus sequi, similique suscipit ullam veritatis vitae voluptas? Mollitia numquam, pariatur. Alias debitis ipsam necessitatibus nisi quisquam reiciendis, sit soluta. Ab accusamus amet assumenda consequatur cupiditate dolorem, ex, hic illum ipsum iure nulla omnis optio pariatur provident sit, tempora temporibus! Aliquam beatae consequatur consequuntur corporis culpa, est exercitationem facilis hic ipsa ipsam, itaque iure iusto magnam magni molestias non obcaecati officia porro, possimus rem repellat ut voluptatem voluptatibus! Assumenda aut consequuntur culpa dignissimos dolore earum ex expedita fugit harum, in iste natus odio officia placeat praesentium quam quo, sint temporibus, tenetur velit? Maxime modi necessitatibus obcaecati officia perspiciatis quaerat quia similique. Amet eaque ipsam mollitia nam reiciendis. Commodi deserunt dignissimos excepturi magnam nulla quisquam ut voluptatem! Accusantium consequuntur dignissimos dolore eligendi error eveniet id illo impedit iste iure labore laborum magni nihil non pariatur perferendis porro possimus reiciendis, repellendus reprehenderit similique soluta suscipit velit. Earum eos molestias necessitatibus nemo nihil qui recusandae rerum voluptas.-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="screen__bottom">-->
          <!--&lt;!&ndash;<scrollbar :length="scrollbar.length" :offset="scrollbar.offset"></scrollbar>&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div id="test" ref="test">-->
      <!--<span style="white-space: nowrap">-->
        <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores, assumenda consequatur consequuntur facere id itaque iusto magni nam, odio odit possimus quaerat quos sed soluta veritatis! Ducimus est, fugiat in ipsum quasi tempora vel voluptate. Ex nihil, optio. Ad beatae commodi et in, nostrum quibusdam quisquam rem similique!-->
      <!--</span>-->
    <!--</div>-->

    <div class="wrapper" style="width: 960px;">
      <sticky-table></sticky-table>
    </div>

  </div>
</template>

<script>
import adults from './data/adults.json'
import Names from './components/RowNames.vue';
import Grid from './components/Grid.vue';
import Timeline from './components/Timeline.vue';
import Scrollbar from './components/Scrollbar.vue';
import Parser from './models/Parser';
import StickyTable from './components/StickyTable.vue';
import Simplebar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import 'normalize.css';
import './assets/stylesheets/index.scss';


export default {
  name: 'app',
  components: { Names, Grid, Timeline, Scrollbar, StickyTable },

  data() {
    return {
      names: adults.items.map(row => row.name),
      items: [1,2],
      scrollbar: {}
    };
  },

  mounted() {
//    this.items = this.$refs.grid.timeline.dates.map(date => {
//      return Parser.dateToText(date.term);
//    });
//    new Simplebar(this.$refs.test);
  },

  methods: {
    onScroll(e) {
      const el = e.target;
      const left = el.scrollLeft;
      const w = el.scrollWidth;
      const viewport = el.parentNode.offsetWidth;
      const length = Math.round(viewport/w * 100);
      const offset = Math.round(left / w * 100);
      this.scrollbar = { length, offset };
    }
  }
};
</script>

<style lang="scss">
  $left-width: 300px;

  * {
    box-sizing: border-box;
  }

  .screen {
    display: flex;
    width: 900px;
  }

  .screen__left {
    padding: 10px;
    flex: 0 0 $left-width;
  }

  .screen__main {
    flex: 1 1 auto;
    max-width: 100%;
  }

  .screen__top {
    position: sticky;
    top: 0;
    padding: 10px 0;
    background: #fff;
    overflow: hidden;
  }

  .screen__center {
    overflow: auto;
    width: 100%;
    transform: translateY(18px);
  }

  .screen__bottom {
    position: sticky;
    bottom: 0;
    padding: 20px 0;
    background: #fff;
  }

  .screen__header {
    overflow: auto;
    margin-bottom: -30px;
  }

  #test {
    position: relative;
    overflow: auto;
    width: 400px;
    height: 500px;
  }
</style>
