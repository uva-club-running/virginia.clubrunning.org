
/**Cross Country**/
var app = angular.module('RecordsApp', []);

/**XC Races**/
app.controller('XCController', function($scope) {
    $scope.sixKRunners = [
        {name:'Anne Menefee',time:'21:38', year:'2014'},
        {name:'Frances Morales',time:'22:16', year:'2014'},
        {name:'Kate Birnbaum',time:'22:21', year:'2014'},
        {name:'Holly Rich',time:'22:42', year:'2011'},
        {name:'Diana Burk',time:'22:45', year:'2010'},
        {name:'Nicole Douma',time:'22:46', year:'2015'},
        {name:'Anna Gordon',time:'22:47', year:'2011'},
        {name:'Sarah Sisson',time:'22:49', year:'2014'},
        {name:'Jessie Foster',time:'22:50', year:'2014'},
        {name:'Morgan Lingar',time:'22:51', year:'2014'}
	];
	$scope.eightKRunners = [
        {name:'Greg Jantzen',time:'24:52', year:'2011'},
        {name:'Zach Garcia',time:'25:12', year:'2011'},
        {name:'Steven Zeller',time:'25:19', year:'2015'},
        {name:'Alex Clark',time:'25:24', year:'2011'},
        {name:'Caleb Doan',time:'25:39', year:'2011'},
        {name:'Myles Anderson',time:'25:43', year:'2015'},
        {name:'Steven Zeller', time:'25:43', year: '2015'},
        {name:'Myles Anderson', time:'25:45', year:'2015'},
        {name:'Kevin Marshall', time:'25:47', year: '2015'},
        {name:'Kevin Marshall',time:'25:51', year:'2015'}
	];
	$scope.gfiveKRunnersXC = [
    {name: 'Steven Zeller', time: '41:20', year: '1999'}];
	
});

/**Track Races**/
app.controller('TrackController', function($scope) {
    $scope.bob='Hello';
	/**200m**/
	$scope.twoHundredFemaleRunners = [
        {name:'Ruby Nwaebube',time:'27.56', year:'2016'},
        {name:'Jordan Stokes',time:'27.96', year:'2015'},
        {name:'Mary Easton',time:'29.20', year:'2016'},
        
	];
	$scope.twoHundredMaleRunners = [
        {name:'Dan Xia ',time:'23.00 ', year:'2016'},
        {name:' ',time:' ', year:' '},
        {name:' ',time:' ', year:' '},
	];
	/**400m**/
	$scope.fourHundredFemaleRunners = [
        {name:'Mary Easton',time:'63.21', year:'2016 '},
        {name:'Stephanie Noll',time:'71.70', year:'2015'},
        
        {name:' ',time:' ', year:' '},
	];
	$scope.fourHundredMaleRunners = [
        {name:'Dan Xia ',time:'52.27', year:'2016'},
        {name:'Brandon von Kannewurff',time:'52.96', year:'2015'},   
        {name:' ',time:' ', year:' '},
	];
	/**4x400m**/
	$scope.fourbyfourFemaleRunners = [
        {name:'Franck-Lingar-Burke-Clark',time:'4:36', year:'2015'},
        {name:' ',time:' ', year:' '},
        {name:' ',time:' ', year:' '},

	];
	$scope.fourbyfourMaleRunners = [
        {name:'Lee-BVK-Taleghani-Xia',time:'3:33.89', year:'2016'},
        {name:'Sinegra-Borten-Anderson-BVK',time:'3:41.00', year:'2015'},
        {name:'Sinegra-Larue-Anderson-BVK',time:'3:42.75', year:'2015'},
        
	];
	/**800m**/
	$scope.eightHundredFemaleRunners = [
        {name:'Caroline Clark',time:'2:11.1', year:'2015'},
        {name:'Elizabeth Franck',time:'2:45.21 ', year:'2016'},
        {name:'Nancy Zhang',time:'2:44.11', year:'2016'},

	];
	$scope.eightHundredMaleRunners = [
        {name:'Brandon von Kannewurff',time:'1:59.44', year:'2015'},
        {name:'Jon "Sharks" Lee',time:'1:59.85', year:'2016'},
        {name:'Eric Taleghani',time:'2:03.80', year:'2016'},
	
	];
	/**4x800m**/
	$scope.fourbyeightFemaleRunners = [
        {name:'Moffit-Johnson-Hermsmeier-Lingar',time:'10:50', year:'2015'},
        {name:' ',time:' ', year:' '},
        {name:' ',time:' ', year:' '},

	];
	$scope.fourbyeightMaleRunners = [
        {name:'BVK-Holland-Anderson-Lee',time:'8:13.23', year:'2016'},
        {name:'Larue-BVK-Sinegra-Calkins',time:'8:39', year:'2015'},
        
        {name:'',time:'', year:''},
	];
	/**DMR**/
	$scope.dmrFemaleRunners = [
        {name:'Stockert-Frank-Clark-NBH',time:'13:43.6', year:'2015'},
		{name:'Franck-Clark-Burke-Foster',time:'13:50.1', year:'2015'},
        {name:' ',time:' ', year:' '},

	];
	$scope.dmrMaleRunners = [
        {name:'Anderson-Borten-BVK-Zeller',time:'10:51.87', year:'2015'},
        {name:'',time:'', year:''},
        {name:'',time:'', year:''},
	];
	/**1600m**/
	$scope.fifteenHundredFemaleRunners = [
        {name:'Caroline Clark',time:'4:42', year:'2015'},
        {name:'Nora Barnes-Horowitz',time:'5:14.58', year:'2016'},
		{name:'Elizabeth Franck',time:'5:16.77', year:'2016'},
	];
	$scope.fifteenHundredMaleRunners = [
        {name:'Myles Anderson',time:'4:06.25', year:'2015'},
        {name:'Logan Burns',time:'4:23.91', year:'2016'},
        {name:'Chris Cantone',time:'4:25.00', year:'2015'},
        
	];
	/**3000m**/
	$scope.threeKFemaleRunners = [
        {name:'Cassidy Burke',time:'11:43', year:'2015'},
        {name:'Nora Barnes-Horowitz',time:'11:50', year:'2015'},
		{name:'Elizabeth Franck',time:'12:25', year:'2015'},

	];
	$scope.threeKMaleRunners = [
        {name:'Steven Zeller',time:'8:57.91', year:'2015'},
        {name:'Myles Anderson',time:'8:58.77', year:'2015'},
        {name:'Dennis McDuffie',time:'9:14.97', year:'2015'},
	];
	/**5000m**/
	$scope.fiveKFemaleRunners = [
        {name:'Ellen Stockert',time:'19:50.98', year:'2015'},
        {name:'',time:'', year:''},
		{name:'',time:'', year:''},

	];
	$scope.fiveKMaleRunners = [
        {name:'James Esernio',time:'15:33.20', year:'2016'},
        {name:'Kevin Marshall',time:'15:44.60', year:'2015'},
        {name:'Steven Zeller',time:'15:49.00', year:'2015'},
        
	];
});

/**Road Races**/
app.controller('RoadController', function($scope) {
    $scope.tenKMaleRunners = [
        {name:'Steven Zeller',time:'32:25', year:'2014'},
        {name:'Kevin Marshall',time:'32:52', year:'2013'},
        {name:'Callum Weinberg',time:'33:08', year:'2014'},
	];
    $scope.tenKFemaleRunners = [
        {name:'Anne Menefee',time:'37:03', year:'2014'},
        {name:'Anna Gordon',time:'40:15', year:'2014'},
        {name:'Ellen Stockert',time:'40:27', year:'2015'},
	];
    $scope.tenMileFemaleRunners = [
        {name:'Lauren Brady',time:'1:14:19', year:'2015'},
        {name:'Courtney Sigloh',time:'1:15:53', year:'2015'},
        {name:' ',time:' ', year:' '}
	];
    $scope.tenMileMaleRunners = [
        {name:'Greg Jantzen',time:'54:12', year:'2012'},
        {name:'Callum Weinberg',time:'57:19', year:'2013'},
        {name:' ',time:' ', year:' '}
	];
	$scope.halfMarathonFemaleRunners = [
        {name:'Courtney Sigloh',time:'1:44:22', year:'2015'},
		{name:' ',time:' ', year:' '},
        {name:' ',time:' ', year:' '},
	];
    $scope.halfMarathonMaleRunners = [
		{name:'Callum Weinberg',time:'1:16:25', year:'2014'},
		{name:' ',time:' ', year:' '},
		{name:' ',time:' ', year:' '}
	];
	$scope.marathonFemaleRunners = [
        {name:'Sarah Sisson',time:'3:19:35', year:'2013'},
		{name:'Emily Bolster',time:'3:24:05', year:'2015'},
        {name:'Rachel Moffitt',time:'3:30:38', year:'2013'},
	];
    $scope.marathonMaleRunners = [
		{name:'Zach Garcia',time:'2:39:55', year:'2014'},
		{name:'Jacob Aronson',time:'2:55:19', year:'2013'},
		{name:' ',time:' ', year:' '}
	];
	
}); 

app.controller('MiscController', function($scope) {
    $scope.LadysMilers = [
        {name:'',time:'', year:''},
        {name:'',time:'', year:''},
        {name:'',time:'', year:''},

	];
	$scope.GentsMilers = [
        {name:'Greg Jantzen',time:'6:29', year:'2013'},
        {name:'Greg Jantzen',time:'6:45', year:'2014'},
        {name:'Greg Jantzen',time:'6:47', year:'2013'},
	];	
});
