import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, FAMILIES, WEIGHTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <MainHeader>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <ButtonContainer>
            <Button>Subscribe</Button>
            <SubscribeLink href="#">Already a subscriber?</SubscribeLink>
          </ButtonContainer>
        </MainHeader>
      </DesktopHeader>
    </header>
  );
};

const MobileHeader = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;
const DesktopHeader = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const ButtonContainer = styled.div`
  justify-self: end;

  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 8px;
`;

const SubscribeLink = styled.a`
  font-size: calc(14 / 16) rem;
  font-family: ${FAMILIES.serif};
  font-weight: ${WEIGHTS.normal};
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-900);
`;

export default Header;
