import { useState, useCallback, useEffect } from 'react';
import { ArrowForwardIos, Cancel } from '@material-ui/icons';
import { PLAYERS } from '../Positions';

import { Player } from '../Player';
import { Grenade } from '../Grenade';

import {
  Container,
  Title,
  HiddenContainer,
  Description,
  Grenades,
  PlayerContent,
} from './styles';

type GrenadeProps = {
  he: number;
  flashbang: number;
  smoke: number;
  molotov: number;
};

type PlayerActionCallProps = {
  shouldDo: string;
  grenades: GrenadeProps;
};

type CallProps = {
  id: number;
  map: string;
  title: string;
  call: {
    description: string;
    players: {
      1: PlayerActionCallProps;
      2: PlayerActionCallProps;
      3: PlayerActionCallProps;
      4: PlayerActionCallProps;
      5: PlayerActionCallProps;
      [index: number]: any;
    };
  };
};

export const Call: React.FC<CallProps> = ({
  title,
  call: { description, players },
}) => {
  const [showCall, setShowCall] = useState(false);
  const [grenades, setGrenades] = useState<GrenadeProps[]>([]);

  const handleToggleCall = () => setShowCall(prevState => !prevState);

  const getGrenadesNum = useCallback(() => {
    let flashbang = 0;
    let smoke = 0;
    let he = 0;
    let molotov = 0;

    const allGrenades = PLAYERS.map(player => players[player.id].grenades);

    allGrenades.forEach(nade => {
      if (nade.flashbang > 0) flashbang += nade.flashbang;
      if (nade.smoke > 0) smoke += nade.smoke;
      if (nade.he > 0) he += nade.he;
      if (nade.molotov > 0) molotov += nade.molotov;

      setGrenades([
        {
          flashbang,
          smoke,
          he,
          molotov,
        },
      ]);
    });
  }, [players]);

  console.log(grenades);

  useEffect(() => {
    getGrenadesNum();
  }, [getGrenadesNum]);

  return (
    <Container>
      <Title onClick={handleToggleCall} isVisible={showCall}>
        <h1>{title}</h1>
        <ArrowForwardIos />
      </Title>
      <HiddenContainer isVisible={showCall}>
        <Description>
          <div>
            <span>Description</span>
            {grenades.map(nade => (
              <Grenades>
                {nade.flashbang > 0 && (
                  <Grenade type='flashbang' amount={nade.flashbang} />
                )}
                {nade.smoke > 0 && <Grenade type='smoke' amount={nade.smoke} />}
                {nade.he > 0 && <Grenade type='he' amount={nade.he} />}
                {nade.molotov > 0 && (
                  <Grenade type='molotov' amount={nade.molotov} />
                )}
              </Grenades>
            ))}
          </div>
          <p>{description}</p>
        </Description>
        {PLAYERS.map(PLAYER => (
          <PlayerContent key={PLAYER.id}>
            <Player colorSecondary image={PLAYER.img} />
            <p>{players[PLAYER.id].shouldDo}</p>
            <span></span>
          </PlayerContent>
        ))}
        <Cancel onClick={handleToggleCall} />
      </HiddenContainer>
    </Container>
  );
};
