import { Flex } from "../../components/Flex"
import { Project } from "./Project"
import ProjectJSON from './Projects.json';
const projects = ProjectJSON.projects;

interface Props {
    animate: boolean;
}
export const Projects: React.FC<Props> = ({ animate }) => {
    return(
        <Flex className={`projects${animate ? ' animate' : ''}`} flexDirection={'column'} alignItems={'center'}>
            <Flex justifyContent={'space-between'} style={{width: '100%'}}>
                {projects.map((project, key) => {
                    const { title, description, image, link, github } = project;

                    return(
                        <Project 
                            title={title}
                            description={description}
                            image={image}
                            link={link}
                            animate={animate}
                            index={key}
                            reverted={key % 2 !== 0}
                            github={github}
                            key={key}
                        />
                    )
                })}
            </Flex>
            <div className={`special-project${animate ? ' animate' : ''}`}>
                <Project 
                    title={'ZeroTwo'}
                    description={'ZeroTwoはあなたのお気に入りのアニメDiscordボットです'}
                    image={'https://cdn.zerotwo.wtf/zerotwo.png'}
                    link={'https://zerotwo.wtf'}
                    animate={true}
                    github={'https://github.com/ZeroTwoDiscord'}
                    index={projects.length}
                    reverted={false}
                />
            </div> 
        </Flex>
    )
}