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
                name="Mai"
                src="../team/mai_dp.jpg"
                role="President and Founder"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Lam"
                src="../team/gina_dp.jpg"
                role="Chief Operations Officer"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Bedi"
                src="../team/bedi_dp.jpg"
                role="Chief Technical Officer"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Chiu"
                src="../team/chiu_dp.jpg"
                role="Chief Financial Officer"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Liao"
                src="../team/liao_dp.jpg"
                role="VP, Marketing & Global Operations"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Pham"
                src="../team/pham_dp.jpg"
                role="VP, Director of Engineering"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
             <TeamMember 
                name="Tam"
                src="../team/tam_dp.jpg"
                role="VP, Director of Design"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Chan"
                src="../team/chan_dp.jpg"
                role="VP, Quality Assurance"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Grewal"
                src="../team/grewal_dp.jpg"
                role="VP, Finance & Accounting"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Ng"
                src="../team/ng_dp.jpg"
                role="VP, Business Development"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Siu"
                src="../team/siu_dp.jpg"
                role="VP, Growth & Advertising"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
              <TeamMember 
                name="Lo"
                src="../team/lo_dp.jpg"
                role="Director of Human Resources"
                desc="Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 
                2000 years old."/>
          </div>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Team;