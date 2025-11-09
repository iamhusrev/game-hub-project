import { CardBody, CardRoot, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "@/services/image-urls";
import Emoji from "../Emoji";
import { Link } from "react-router-dom";
import type Game from "@/entities/Game";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot>
      <Image
        src={game.background_image || getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p: { platform: any }) => p.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
