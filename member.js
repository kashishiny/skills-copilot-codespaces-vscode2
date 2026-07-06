function skillsMember() {
    return {
        restricted: 'E',
        templateUrl: 'app/components/member/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        BindToController: true,
        
        scope: {
            member: '='
        }
    };
}