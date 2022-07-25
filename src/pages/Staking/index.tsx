/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { staking } from "../../lib/mock/staking";
import { StakingCard } from "../../components/molecules";
import {
  Title,
  Description,
  Modal,
  Input,
  Popup,
  Button,
} from "../../components/atoms";

import * as S from "./style";
import * as Card from "../../components/molecules/StakingCard/style";

export const Staking: FC = () => {
  const [selectedCard, setSelectedCard] = useState<null | {
    title: string;
    roi: string;
    lp: string;
  }>(null);
  const [stateToken, setStateToken] = useState<string>("100.00");

  const getDescription = () => (
    <Description>
      Native assets are used by the protocol for flashloans and arbitrage deals.
      You can stake these coins to provide liquidity and make money from it,
      essentially a new tool for staking native network coins
      <br />
      <br />
      The protocol distributes 10% of arbitrage and 60% of flashloan profits to
      LP&apos;s
    </Description>
  );

  return (
    <>
      <S.Modal>
        <Modal
          isVisible={!!selectedCard}
          handleClose={() => setSelectedCard(null)}
        >
          <Card.Header>
            <Card.HeaderPhoto />
            <Card.HeaderTitle>{selectedCard?.title}</Card.HeaderTitle>
          </Card.Header>
          <Input
            value={stateToken}
            onChange={setStateToken}
            label="Stake Token"
            currency="WBNB"
            topLabel="Balance 12 WNBN"
          />
          <Card.List>
            <Card.Item>
              <Popup content="Lorem ipsum dolor sit amet">
                <Card.ItemTitle>ROI</Card.ItemTitle>
              </Popup>
              <Card.ItemWrapper>
                <Card.ItemTitle>$</Card.ItemTitle>
                <Card.ItemDescr>{selectedCard?.roi}</Card.ItemDescr>
              </Card.ItemWrapper>
            </Card.Item>
            <Card.Item>
              <Popup content="Lorem ipsum dolor sit amet">
                <Card.ItemTitle>Get LP</Card.ItemTitle>
              </Popup>
              <Card.ItemWrapper>
                <Card.ItemTitle>LP</Card.ItemTitle>
                <Card.ItemDescr>{selectedCard?.lp}</Card.ItemDescr>
              </Card.ItemWrapper>
            </Card.Item>
          </Card.List>
          <Card.Actions>
            <Button onClick={() => setSelectedCard(null)}>Approve</Button>
            <Button disabled>Stake</Button>
          </Card.Actions>
        </Modal>
      </S.Modal>
      <S.Staking>
        <S.Wrapper>
          <Title>Stake and Earn protocol profits</Title>
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
            {staking.cards.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <StakingCard
                  title={item.title}
                  list={item.list}
                  handleDeposit={() =>
                    setSelectedCard({
                      title: item.title,
                      roi: "1 200 000",
                      lp: "1.2",
                    })
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <S.Pagination />
        </S.Wrapper>
        <S.Description>{getDescription()}</S.Description>
      </S.Staking>
    </>
  );
};
