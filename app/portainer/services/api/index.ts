import angular from 'angular';

import { EndpointService } from './endpoint.service';

export default angular.module('portainer.app.services.api', []).factory('EndpointService', EndpointService).name;
