import { useSelector } from 'react-redux'

import Hero from '../components/hero/Hero'
// import HeroScience from '../components/home/HeroScience'

import Grades from '../components/home/Grades'
import UserHome from '../components/home/UserHome'
import SEOHelmetAsync from '../tools/SEOHelmetAsync'
import LatestCourses from '../components/home/LatestCourses'
import AboutUS from '../components/home/AboutUS'
import Section from '../style/mui/styled/Section'
import TitleWithDividers from '../components/ui/TitleWithDividers'
import Services from '../components/services/Services'

function HomePage() {

    const user = useSelector(s => s.global.user)

    if (user) {
        return <>
            <SEOHelmetAsync
                title={' الصفحه الرئيسيه - ' + "منصه مستر  "}
                desc="منصه مستر   للتفوق ه"
                url={window.location.href}
            />

            <UserHome />
        </>
    }
    return (
        <div>
            <SEOHelmetAsync
                title={' الصفحه الرئيسيه - ' + "منصه مستر  "}
                desc="منصه مستر   للتفوقه"
                url={window.location.href}
                isSiteLink
            />
            <Hero />
            <LatestCourses />
            <AboutUS />
            <Section>
                <TitleWithDividers title={'خدماتنا'} />
                <Services />
            </Section>
            {/* <HeroScience /> */}
            {/* <Services /> */}
            <Grades />
        </div>
    )
}

export default HomePage
