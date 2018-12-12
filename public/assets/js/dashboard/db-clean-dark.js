(function ($) {

	'use strict';

	// ------------------------------------------------------- //
	// Noty
	// ------------------------------------------------------ //
	setTimeout(function () {
		new Noty({
		    text: '<div class="text-center">Huzzah! Elisyam is fully loaded.</div>',
		    type: 'notification',
		    layout: 'topRight',
		    timeout: 3000,
			animation: {
				open: 'animated bounceInRight', // Animate.css class names
				close: 'animated bounceOutRight' // Animate.css class names
			}
		}).show()
	}, 3000)

	// ------------------------------------------------------- //
	// Ratings
	// ------------------------------------------------------ //
	var ctx = document.getElementById('reviews-stats').getContext("2d");

	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May"],
			datasets: [{
				label: "Ratings",
				borderColor: '#08a6c3',
				pointRadius: 0,
				pointHitRadius: 5,
				pointHoverRadius: 3,
				pointHoverBorderColor: "#08a6c3",
				pointHoverBackgroundColor: "#08a6c3",
				pointHoverBorderWidth: 3,
				fill: true,
				backgroundColor: '#2c304d',
				borderWidth: 3,
				data: [10, 4, 10, 7, 12]
			}]
		},
		options: {
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 5,
				displayColors: false,
				yPadding: 5,
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}
			},
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					ticks: {
						display: false,
						beginAtZero: false,
						maxTicksLimit: 2,
					},
					gridLines: {
						drawBorder: false,
						display: false
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: true
					}
				}]
			}
		}
	});

	// ------------------------------------------------------- //
	// Facebook
	// ------------------------------------------------------ //
	$('.widget35').owlCarousel({
	    animateOut: 'fadeOutDown',
	    animateIn: 'fadeInDown',
	    loop: true,
	    autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
	    items:1,
	    margin:30,
	    stagePadding:0,
	    smartSpeed:450
	});

	// ------------------------------------------------------- //
	// Delivered Orders
	// ------------------------------------------------------ //
	var randomScalingFactor = function () {
		return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
	};

	Chart.helpers.drawRoundedTopRectangle = function (ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height);
		ctx.lineTo(x, y + height);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	};

	Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
		draw: function () {
			var ctx = this._chart.ctx;
			var vm = this._view;
			var left, right, top, bottom, signX, signY, borderSkipped;
			var borderWidth = vm.borderWidth;

			if (!vm.horizontal) {
				left = vm.x - vm.width / 2;
				right = vm.x + vm.width / 2;
				top = vm.y;
				bottom = vm.base;
				signX = 1;
				signY = bottom > top ? 1 : -1;
				borderSkipped = vm.borderSkipped || 'bottom';
			} else {
				left = vm.base;
				right = vm.x;
				top = vm.y - vm.height / 2;
				bottom = vm.y + vm.height / 2;
				signX = right > left ? 1 : -1;
				signY = 1;
				borderSkipped = vm.borderSkipped || 'left';
			}

			if (borderWidth) {
				var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
				borderWidth = borderWidth > barSize ? barSize : borderWidth;
				var halfStroke = borderWidth / 2;
				var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
				var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
				var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
				var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
				if (borderLeft !== borderRight) {
					top = borderTop;
					bottom = borderBottom;
				}
				if (borderTop !== borderBottom) {
					left = borderLeft;
					right = borderRight;
				}
			}

			var barWidth = Math.abs(left - right);
			var roundness = this._chart.config.options.barRoundness || 0.2;
			var radius = barWidth * roundness * 0.2;

			var prevTop = top;

			top = prevTop + radius;
			var barRadius = top - prevTop;

			ctx.beginPath();
			ctx.fillStyle = vm.backgroundColor;
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = borderWidth;

			Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);

			ctx.fill();
			if (borderWidth) {
				ctx.stroke();
			}

			top = prevTop;
		},
	});

	Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

	Chart.controllers.roundedBar = Chart.controllers.bar.extend({
		dataElementType: Chart.elements.RoundedTopRectangle
	});

	var ctx = document.getElementById("orders").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'roundedBar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [{
				label: 'Delivered',
				data: [30, 24, 22, 17, 22, 24, 9, 14, 20, 13, 17, 13],
				borderColor: "#2c304d",
				backgroundColor: "#e76c90",
				hoverBackgroundColor: "#e76c90"
			}, {
				label: 'Estimated',
				data: [10, 14, 12, 20, 20, 8, 10, 20, 7, 11, 8, 10],
				borderColor: "#2c304d",
				backgroundColor: "#5d5386",
				hoverBackgroundColor: "#5d5386"
			}]
		},
		options: {
			responsive: true,
			barRoundness: 1,
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 5,
				displayColors: false,
				yPadding: 5,
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: "#fff",
					usePointStyle: true,
					padding: 50,
					fontSize: 13
				}
			},
			scales: {
				xAxes: [{
					barThickness: 12,
					stacked: false,
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: true
					}
				}],
				yAxes: [{
					stacked: false,
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: false
					}
				}]
			}
		}
	});

	// ------------------------------------------------------- //
	// Widget 02 (Activity) 
	// ------------------------------------------------------ //
	var ctx = document.getElementById('sale-chart').getContext("2d");

	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["September", "October", "November", "December", "January", "Febuary"],
			datasets: [{
					label: "Sales",
					borderColor: "#e76c90",
					pointBackgroundColor: "#e76c90",
					pointHoverBorderColor: "#e76c90",
					pointHoverBackgroundColor: "#e76c90",
					pointBorderColor: "#2c304d",
					pointBorderWidth: 3,
					pointRadius: 6,
					fill: true,
					backgroundColor: "rgba(231, 108, 144, 0.075)",
					borderWidth: 4,
					data: [70, 80, 105, 80, 140, 120]
				},
				{
					label: "Visitors",
					borderColor: "#aea9c3",
					pointBackgroundColor: "#aea9c3",
					pointHoverBorderColor: "#5d5386",
					pointHoverBackgroundColor: "#5d5386",
					pointBorderColor: "#2c304d",
					pointBorderWidth: 3,
					pointRadius: 6,
					fill: true,
					backgroundColor: "transparent",
					borderWidth: 3,
					borderDash: [10, 5],
					data: [90, 100, 80, 120, 100, 110]
				}
			]
		},
		options: {
			legend: {
				display: false
			},
			tooltips: {
				backgroundColor: 'rgba(47, 49, 66, 0.8)',
				titleFontSize: 13,
				titleFontColor: '#fff',
				caretSize: 0,
				cornerRadius: 4,
				xPadding: 10,
				displayColors: false,
				yPadding: 10
			},
			layout: {
				padding: {
					left: -10,
					right: 0,
					top: 0,
					bottom: -20
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						display: false,
						beginAtZero: false,
						maxTicksLimit: 3
					},
					gridLines: {
						drawBorder: false,
						display: false
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
						display: false
					},
					ticks: {
						display: false
					}
				}]
			}
		}
	});

    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
	$(function() {
		// page is ready
		$('#demo-calendar').fullCalendar({
			// emphasizes business hours
			businessHours: true,
			defaultView: 'month',
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: [
				{
					title: 'Barber',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-05',
					end: '2018-09-05',
					className: 'fc-bg-default',
					icon : "scissors"
				}, 
				{
					title: 'Flight Paris',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-08T14:00:00',
					end: '2018-09-08T20:00:00',
					className: 'fc-bg-violet',
					icon : "plane",
					allDay: false
				},
				{
					title: 'Team Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-10T13:00:00',
					end: '2018-09-10T16:00:00',
					className: 'fc-bg-orange',
					icon : "group",
					allDay: false
				},
				{
					title: 'Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-12',
					className: 'fc-bg-orange',
					icon : "suitcase"
				},
				{
					title: 'Conference',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-13',
					end: '2018-09-15',
					className: 'fc-bg-violet',
					icon : "calendar"
				}, 
				{
					title: 'Baby Shower',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-13',
					end: '2018-09-14',
					className: 'fc-bg-default',
					icon : "child"
				},
				{
					title: 'Birthday',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-13',
					end: '2018-09-14',
					className: 'fc-bg-default',
					icon : "birthday-cake"
				}, 
				{
					title: 'Restaurant',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-15T09:30:00',
					end: '2018-09-15T11:45:00',
					className: 'fc-bg-default',
					icon : "glass",
					allDay: false
				},
				{
					title: 'Dinner',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-15T20:00:00',
					end: '2018-09-15T22:30:00',
					className: 'fc-bg-default',
					icon : "cutlery",
					allDay: false
				},
				{
					title: 'Shooting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-25',
					end: '2018-09-25',
					className: 'fc-bg-blue',
					icon : "camera"
				},
				{
					title: 'Go Space :)',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-27',
					end: '2018-09-27',
					className: 'fc-bg-default',
					icon : "rocket"
				},
				{
					title: 'Dentist',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2018-09-29T11:30:00',
					end: '2018-09-29T012:30:00',
					className: 'fc-bg-blue',
					icon : "medkit",
					allDay: false
				}
			],
			eventRender: function(event, element) {
				if(event.icon){          
					element.find(".fc-title").prepend("<i class='la la-"+event.icon+"'></i>");
				}
			  },
			eventClick: function(event, jsEvent, view) {
			        $('.event-icon').html("<i class='la la-"+event.icon+"'></i>");
					$('.event-title').html(event.title);
					$('.event-body').html(event.description);
					$('.eventUrl').attr('href',event.url);
					$('#modal-view-event').modal();
			},
		})
	});

    // ------------------------------------------------------- //
    // Leaflet
    // ------------------------------------------------------ //
	var cities = L.layerGroup();

	var mbAttr = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

	var map = L.map('layer-control', {
		center: [39.75, -104.90],
		zoom: 11,
		layers: [grayscale, cities]
	});

	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};

	var overlays = {
		"Customers": cities
	};

    var firstIcon = L.icon({
        iconUrl: 'assets/img/avatar/avatar-02.jpg',
        iconSize: [80, 80], // size of the icon
    });

    var secondIcon = L.icon({
        iconUrl: 'assets/img/avatar/avatar-04.jpg',
        iconSize: [80, 80], // size of the icon
    });

    var thirdIcon = L.icon({
        iconUrl: 'assets/img/avatar/avatar-05.jpg',
        iconSize: [80, 80], // size of the icon
    });

    var firstPopup = "Brandon Smith <span class='badge-text badge-text-small info ml-2'>Paid</span>";
    var secondPopup = "Nathan Hunter <span class='badge-text badge-text-small danger ml-2'>Failed</span>";
    var thirdPopup = "Megan Duncan <span class='badge-text badge-text-small info ml-2'>Paid</span>";

	L.marker([39.76, -104.90], {icon: firstIcon}).bindPopup(firstPopup).addTo(cities);
	L.marker([39.68, -104.99], {icon: secondIcon}).bindPopup(secondPopup).addTo(cities);
	L.marker([39.73, -104.8], {icon: thirdIcon}).bindPopup(thirdPopup).addTo(cities);

	L.control.layers(baseLayers, overlays).addTo(map);

})(jQuery);