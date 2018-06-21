// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { InfoIcon } from './info-icon'
import { RectangleImg } from './rectangle-img'
import { Balloon } from './balloon'
import { BlockTag } from './block-tag'
import { DetailTitle } from './detail-title'
import { ArticleContents } from './article-contents'
import { TipsHeader } from './tips-header'
import { ClockIcon } from './clock-icon'
import { PhoneIcon } from './phone-icon'
import { WalkmanIcon } from './walkman-icon'
import { PhoneNumber } from './phone-number'
import { WeeklyText } from './weekly-text'
import { RequiredTime } from './required-time'
import { AddressText } from './address-text'
import { ShopInfoColumn } from './shop-info-column'
import { Map } from './map'
import { RectangleButton } from './rectangle-button'

import { COLORS } from '../styles/colors'
import SARADA from '../images/mock/sarada.jpg'

const { MILK } = COLORS

const contents = '業務スーパーの冷凍食品で『デミハンバーグ』という商品はご存知でしょうか。定番おかずのハンバーグは業務スーパーでも種類豊富ですが、その中でも本品は1個当たり約57.2円という格安ぶり！ ソース付きハンバーグとしては最安クラスに入る一品ではないかと。正直お値段なりのクオリティではありますが、毎日のお弁当用にはかなり便利かと思います！ 業務スーパーの冷凍食品で『デミハンバーグ』という商品はご存知でしょうか。定番おかずのハンバーグは業務スーパーでも種類豊富ですが、その中でも本品は1個当たり約57.2円という格安ぶり！ ソース付きハンバーグとしては最安クラスに入る一品ではないかと。正直お値段なりのクオリティではありますが、毎日のお弁当用にはかなり便利かと思います！業務スーパーの冷凍食品で『デミハンバーグ』という商品はご存知でしょうか。定番おかずのハンバーグは業務スーパーでも種類豊富ですが、その中でも本品は1個当たり約57.2円という格安ぶり！ ソース付きハンバーグとしては最安クラスに入る一品ではないかと。正直お値段なりのクオリティではありますが、毎日のお弁当用にはかなり便利かと思います！業務スーパーの冷凍食品で『デミハンバーグ』という商品はご存知でしょうか。定番おかずのハンバーグは業務スーパーでも種類豊富ですが、その中でも本品は1個当たり約57.2円という格安ぶり！ ソース付きハンバーグとしては最安クラスに入る一品ではないかと。正直お値段なりのクオリティではありますが、毎日のお弁当用にはかなり便利かと思います！'

storiesOf('Atoms', module)
  .add('InfoIcon', () => (
    <div style={{width: '100%', height: '100%', background: MILK}}>
      <InfoIcon />
    </div>
  ))
  .add('RectangleImg', () => (
    <div style={{padding: '0 30vw'}}>
      <RectangleImg
        imgUrl={SARADA}
        imgWidth='100%'
        imgHeight='calc(40vw * 0.70)'
      />
    </div>
  ))
  .add('Balloon', () => (
    <div style={{width: '20vw', paddingTop: '50px'}}>
      <Balloon
        text='お店情報'
      />
    </div>
  ))
  .add('BlockTag', () => (
    <div style={{width: '20vw', paddingTop: '50px'}}>
      <BlockTag
        text='ハンバーグ'
      />
    </div>
  ))
  .add('DetailTitle', () => (
    <div style={{padding: '0 30vw'}}>
      <DetailTitle
        title='絶品ハンバーグを食べに行ったら天国な話'
      />
    </div>
  ))
  .add('ArticleContents', () => (
    <div style={{padding: '0 30vw'}}>
      <ArticleContents>
        { contents }
      </ArticleContents>
    </div>
  ))
  .add('TipsHeader', () => (
    <div style={{padding: '0 30vw'}}>
      <TipsHeader
        title='お店の情報'
      />
    </div>
  ))
  .add('Icons', () => (
    <div style={{padding: '0 30vw'}}>
      <ClockIcon />
      <PhoneIcon />
      <WalkmanIcon />
    </div>
  ))
  .add('PhoneNumber', () => (
    <PhoneNumber
      number='03-5699-3588'
    />
  ))
  .add('WeeklyText', () => (
    <div>
      <WeeklyText
        open='19:00'
        close='21:00'
        holiday='月'
      />
    </div>
  ))
  .add('RequiredTime', () => (
    <div>
      <RequiredTime
        requiredTime={4}
      />
    </div>
  ))
  .add('AddressText', () => (
    <div>
      <AddressText
        postalCode='〒123-4567'
        address='東京都葛飾区金町'
      />
    </div>
  ))
  .add('Map', () => (
    <div>
      <Map
        latlng={{
          lat: 35.7717705,
          lng: 139.8634296,
        }}
      />
    </div>
  ))
  .add('営業日', () => (
    <div style={{padding: '0 30vw'}}>
      <ShopInfoColumn
        IconComponent={() => (<ClockIcon/>)}
        DescriptionComponent={() =>  (
          <WeeklyText
            open='19:00'
            close='21:00'
            holiday='月'
          />
        )}
      />
    </div>
  ))
  .add('RectableButton', () => (
    <div style={{padding: '0 30vw'}}>
      <RectangleButton
        text='記事を閉じる'
        onClick={() => {}}
      />
    </div>
  ))
