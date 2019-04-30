import React from 'react'
import styled from 'styled-components'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Colors, WINDOW_SIZES, MEDIA } from '../../../constants/Styles'
import { LargeParagraph } from '../../../constants/BodyText'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'
import { ThumbnailCircle } from '../../../componentLibrary/atoms/image/ThumbnailCircle'
import { TagLine } from '../../../componentLibrary/molecules/tagline/TagLine'

const data = [
  { src: '', name: 'John Evans', position: 'General Manager'},
  { src: '', name: 'L G', position: 'General Manager'},
  { src: '', name: 'Victorai Parsons', position: 'General Manager'},
  { src: '', name: 'Victorai Parsons', position: 'General Manager'},
  { src: '', name: 'Victorai Parsons', position: 'General Manager'},
  { src: '', name: 'Victorai Parsons', position: 'General Manager'},
  { src: '', name: 'Victorai Parsons', position: 'General Manager'},
  { src: '', name: 'Victorai Parsons', position: 'General Manager'},
]

const P = styled(LargeParagraph)`font-family: 'AkagiProExtraLight'`

const Name = styled.p`margin: 20px 0 0 0;`

const Position = styled.p`
  margin: 0;
  color: ${Colors.BROWN_GREY};
`

const ProfileListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  padding: 50px 0;

  ${MEDIA.phone`
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  `}
`

const ProfileContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

const StoryContainer = styled.div`padding: 30px 0;`

const Profile = (props) => (
  <ProfileContainer>
    <ThumbnailCircle source={props.source} width='125px' height='125px'/>
    <Name>{props.name || 'test'}</Name>
    <Position>{props.postition || 'test'}</Position>
  </ProfileContainer>
)

export const Story = () => {
  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.phone}px)`);

  const imageLists = data.map(image => (
    matches
      ? <Profile source={image.src} name={image.name} position={image.position} />
      : <TagLine title={image.name} content={image.position} source={image.src} imageSize="60px" />
  ))

  return (
    <StoryContainer>
      <MainHeadings
        title='Our Story'
        subtitle='Maecenas enim purus, fringilla nec'
      />
      <div style={{ margin: '50px 0', width: '100%', height: '400px', background: 'lightgrey' }}>image</div>
      <P>{firstParagraph}</P>
      <P>{secondParagraph}</P>
      <h3>The Team behind Wellglo</h3>
      <P>Our company is led by industry professionals who believe better</P>
      <P>healthcare starts with the patient.</P>
      <ProfileListContainer>
        {imageLists}
      </ProfileListContainer>
    </StoryContainer>
  )
}

const firstParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum."

const secondParagraph = "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt auctor finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas enim purus, fringilla nec sapien quis, fringilla tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin porttitor libero id velit mattis, quis luctus mi pellentesque. Etiam vehicula interdum pellentesque. Sed eleifend et nisl in accumsan. Quisque vestibulum ex nibh, at scelerisque turpis venenatis eget. Mauris mollis lorem quis odio ullamcorper scelerisque."
