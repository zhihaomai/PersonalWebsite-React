/* Team Page
 * ---------
 */

var React = require('react');

var Header = require('./header');
var Banner = require('./banner');
var TeamMember = require('./teamMember');
var Footer = require('./footer');

var Team = React.createClass({

  render: function() {
    return (
      <div className="teamPage">
        <Header />
        <div className="content">
          <Banner
            imgSrc="../pictures/team_banner.jpg"
            icon="fa fa-users"
            bannerTitle="THE TEAM"
            bannerDesc="Team work makes the dream work. When there is teamwork
            and collaboration, wonderful things can be achieved."
            showBtn={false} />

          <div className="pure-g teamGrid">
              <TeamMember
                name="Zhihao"
                src="../team/mai_dp.jpg"
                role="Founder"
                desc="Active role in all content creation."/>
              <TeamMember
                name="Gina"
                src="../team/gina_dp.jpg"
                role="Main Content Contributer"
                desc="Vlogs and GoPro footage."/>
              <TeamMember
                name="Kevin"
                src="../team/bedi_dp.jpg"
                role="Content and Music Contributer"
                desc="Vlogs footage and audio creation."/>
              <TeamMember
                name="Alan"
                src="../team/chiu_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Alvin"
                src="../team/liao_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Richard"
                src="../team/pham_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
             <TeamMember
                name="Wesley"
                src="../team/tam_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Kelvin"
                src="../team/chan_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Harry"
                src="../team/grewal_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Stephen"
                src="../team/ng_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Anthony"
                src="../team/siu_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Vincent"
                src="../team/lo_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Michael"
                src="../team/mike_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Lawrence"
                src="../team/larry_dp.jpg"
                role="Content Contributer"
                desc="GoPro footage."/>
              <TeamMember
                name="Prince"
                src="../team/prince.jpg"
                role="Content Contributer"
                desc="Vlogs footage."/>
              <TeamMember
                name="Jasmeet"
                src="../team/jas_dp.jpg"
                role="Content Contributer"
                desc="Vlogs footage."/>
          </div>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Team;