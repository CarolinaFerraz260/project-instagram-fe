import {
  AlignAllCenter,
  Container,
  UserName,
  ContainerImageAndNumbers,
  ImageProfile,
  ContainerInfoNumbers,
  ContainerNumberAndTitle,
  NumberInfoNumbers,
  TitleInfoNumbers,
  NameProfile,
  DescriptionProfile,
  ContainerButtonsProfile,
  ButtonSaves,
  ButtonEditProfile,
  ContainerPics,
  IconNoPosts,
  TitleNoPosts,
  LinksPages,
} from "./styles";
import ProfileCR7 from "../../assets/profile.jpg";
import Saves from "../../assets/saves.svg";
import NoPost from "../../assets/noPostsYet.svg";

const ProfileDiv = () => {
  return (
    <>
      <AlignAllCenter>
        <Container>
          <UserName>name user</UserName>
          <ContainerImageAndNumbers>
            <ImageProfile src={ProfileCR7}></ImageProfile>
            <ContainerInfoNumbers>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0</NumberInfoNumbers>
                <TitleInfoNumbers>Posts</TitleInfoNumbers>
              </ContainerNumberAndTitle>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0</NumberInfoNumbers>
                <TitleInfoNumbers>Followers</TitleInfoNumbers>
              </ContainerNumberAndTitle>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0</NumberInfoNumbers>
                <TitleInfoNumbers>Following</TitleInfoNumbers>
              </ContainerNumberAndTitle>
            </ContainerInfoNumbers>
          </ContainerImageAndNumbers>
          <NameProfile>name profile</NameProfile>
          <DescriptionProfile>
            decricao a falar sobre a pesoa vla bla bla kwdedr8fr4hfurfrbnfnv
          </DescriptionProfile>
          <ContainerButtonsProfile>
            <LinksPages href="/saves" title="Saves">
              <ButtonSaves src={Saves} alt="icon"></ButtonSaves>
            </LinksPages>
            <ButtonEditProfile>
              <LinksPages href="/editprofile" title="Saves">
                Edit Profile
              </LinksPages>
            </ButtonEditProfile>
          </ContainerButtonsProfile>
          <ContainerPics>
            <IconNoPosts src={NoPost} alt="icon"></IconNoPosts>
            <TitleNoPosts>No posts yet</TitleNoPosts>
          </ContainerPics>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default ProfileDiv;
