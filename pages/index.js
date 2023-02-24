import About from './about';
import Project from './projects';
import Timeline from './timeline';
import Skills from './skills';
import Experience from './experience';

export default function Index() {

	return (
		<>
			<About />
			<Skills />
			<Experience/>
			<Project />
			<Timeline />
		</>
	);
}