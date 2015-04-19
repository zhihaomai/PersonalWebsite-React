/* Team Page
 * ---------
 */

var React = require('react');

var Header = require('./header');
var TeamMember = require('./TeamMember');
var Footer = require('./footer');

var Team = React.createClass({

  render: function() {
    return (
      <div className="teamPage">
        <Header />
        <div className="content">
          <div className="pure-g teamGrid">
              <TeamMember 
                name="Zhihao"
                src="../team/mai_dp.jpg"
                role="Founder"
                desc=""/>
              <TeamMember 
                name="Gina"
                src="../team/gina_dp.jpg"
                role="Music and Creative Content"
                desc=""/>
              <TeamMember 
                name="Kevin"
                src="../team/bedi_dp.jpg"
                role="Audio and Technical Content"
                desc=""/>
              <TeamMember 
                name="Alan"
                src="../team/chiu_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Alvin"
                src="../team/liao_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Richard"
                src="../team/pham_dp.jpg"
                role="Content Contributer"
                desc=""/>
             <TeamMember 
                name="Wesley"
                src="../team/tam_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Kelvin"
                src="../team/chan_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Harry"
                src="../team/grewal_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Stephen"
                src="../team/ng_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Anthony"
                src="../team/siu_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Vincent"
                src="../team/lo_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Michael"
                src="../team/mike_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Lawrence"
                src="../team/larry_dp.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Prince"
                src="../team/prince.jpg"
                role="Content Contributer"
                desc=""/>
              <TeamMember 
                name="Jasmeet"
                src="../team/jas_dp.jpg"
                role="Content Contributer"
                desc=""/>
          </div>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Team;