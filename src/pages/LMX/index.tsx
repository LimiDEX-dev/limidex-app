/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Title,
  Description,
  Modal,
  Input,
  Dropdown,
  Button,
  Popup,
} from "../../components/atoms";
import { lmx } from "../../lib/mock/lmx";
import { StakingCard } from "../../components/molecules";

import * as S from "./style";
import * as Card from "../../components/molecules/StakingCard/style";

const lockPeriodes = [
  {
    value: "year",
    label: "1 Year",
  },
  {
    value: "year",
    label: "1 Year",
  },
  {
    value: "year",
    label: "1 Year",
  },
  {
    value: "year",
    label: "1 Year",
  },
];

export const LMX: FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [lockLMX, setLockLMX] = useState<string>("100.00");
  const [selectedPeriod, setSelectedPeriod] = useState(lockPeriodes[0]);

  const getFirstDescription = () => (
    <Description>
      Lock SPLX to Earn all native network coins simultaneously
      <br />
      <br />
    </Description>
  );

  const getRewardsDescription = () => (
    <span className="lmx__rewards-description">
      <Description>
        Holders can lock SPLX for a certain period of time to get veSPLX, which
        allows them right to receive a share of the profits on each network
        <S.Description>
          <S.DescriptionWrapper>
            <S.DescriptionTitle>Time Lock</S.DescriptionTitle>
            <S.DescriptionContent>
              1 Month: 1 SPLX = 0.1 veSPLX <br />3 Months: 1 SPLX = 0.25 veSPLX{" "}
              <br />6 Months: 1 SPLX = 0.5 veSPLX <br />
              1 Year: 1 SPLX = 1 veSPLX
              <br />
              <br />
              The protocol allocates 2% of the total protocol profit in each
              network and distributes it to veSPLX holders
              <br />
              <br />
              Lock SPLX and get rewards in WETH, WBNB, WMATIC, WFTM, WAVAX,
              arbitrum WETH
            </S.DescriptionContent>
          </S.DescriptionWrapper>
        </S.Description>
      </Description>
    </span>
  );

  const getDescription = () => (
    <Description>
      {getFirstDescription()}
      {getRewardsDescription()}
    </Description>
  );

  return (
    <>
      <S.Modal>
        <Modal isVisible={isModal} handleClose={() => setIsModal(false)}>
          <Card.Header>
            <Card.HeaderPhoto />
            <Card.HeaderTitle>LMX</Card.HeaderTitle>
          </Card.Header>
          <Input
            value={lockLMX}
            onChange={setLockLMX}
            label="Lock LMX"
            currency="LMX"
            topLabel="Balance 12 LMX"
          />
          <Card.List>
            <Card.Item>
              <Popup content="Lorem ipsum dolor sit amet">
                <Card.ItemTitle>ROI</Card.ItemTitle>
              </Popup>
              <Card.ItemWrapper>
                <Card.ItemTitle>$</Card.ItemTitle>
                <Card.ItemDescr>1 200 000</Card.ItemDescr>
              </Card.ItemWrapper>
            </Card.Item>
            <Card.Item>
              <Popup content="Lorem ipsum dolor sit amet">
                <Card.ItemTitle>Get LP</Card.ItemTitle>
              </Popup>
              <Card.ItemWrapper>
                <Card.ItemTitle>LP</Card.ItemTitle>
                <Card.ItemDescr>1.2</Card.ItemDescr>
              </Card.ItemWrapper>
            </Card.Item>
            <Card.Item>
              <Card.ItemTitle>Lock period</Card.ItemTitle>
              <Card.ItemWrapper>
                <Card.ItemTitle>
                  <Dropdown items={lockPeriodes} onSelect={setSelectedPeriod}>
                    {selectedPeriod.label}
                  </Dropdown>
                </Card.ItemTitle>
              </Card.ItemWrapper>
            </Card.Item>
          </Card.List>
          <Card.Actions>
            <Button onClick={() => setIsModal(false)}>Approve</Button>
            <Button disabled>Stake</Button>
          </Card.Actions>
        </Modal>
      </S.Modal>
      <S.LMX>
        <S.Wrapper>
          <Title>Lock SPLX to Earn protocol profits</Title>
          {getDescription()}
        </S.Wrapper>
        <S.Wrapper>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: ".staking__pagination",
              renderBullet: (index, className) => `
              <span class="${className}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                  <circle cx="8" cy="8" r="4.5" stroke="currentColor" />
                </svg>
              </span>
            `,
            }}
          >
            {lmx.cards.map((card, index) => (
              <SwiperSlide key={`${card.title}-${index}`}>
                <StakingCard
                  title={card.title}
                  list={card.list}
                  handleDeposit={() => setIsModal(true)}
                  tokens={card.tokens}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="staking__pagination" />
        </S.Wrapper>
        <S.DescriptionMainWrapper>
          {getFirstDescription()}
          {getRewardsDescription()}
        </S.DescriptionMainWrapper>
      </S.LMX>
    </>
  );
};
