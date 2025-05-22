import {
  COOLING_CONTENT,
  HEATING_CONTENT,
  HEAT_PUMP_CONTENT,
  DUCTLESS_CONTENT,
  AIR_QUALITY_CONTENT,
  EMERGENCY_SERVICE_CONTENT,
  ELECTRICIAN_CONTENT,
} from "@/data/services/main-union-services";
import {
  AC_REPAIR_CONTENT,
  AC_MAINTENANCE_CONTENT,
  AC_INSTALLATION_CONTENT,
} from "@/data/services/cooling-services";
import {
  HEATING_REPAIR_CONTENT,
  HEATING_MAINTENANCE_CONTENT,
  HEATING_INSTALLATION_CONTENT,
} from "@/data/services/heating-services";
import {
  HP_REPAIR_CONTENT,
  HP_MAINTENANCE_CONTENT,
  HP_INSTALLATION_CONTENT,
} from "@/data/services/heat-pump-services";
import {
  MINI_SPLIT_REPAIR_CONTENT,
  MINI_SPLIT_MAINTENANCE_CONTENT,
  MINI_SPLIT_INSTALLATION_CONTENT,
} from "@/data/services/ductless-services";
import {
  AIR_FILTER_CONTENT,
  THERMOSTAT_CONTENT,
  UV_AIR_SCRUBBER_CONTENT,
  AIR_DUCT_CLEANING,
} from "@/data/services/air-services";

export const SERVICES_PAGES = {
  cooling: COOLING_CONTENT,
  heating: HEATING_CONTENT,
  "heat-pumps": HEAT_PUMP_CONTENT,
  ductless: DUCTLESS_CONTENT,
  "air-quality": AIR_QUALITY_CONTENT,
  "emergency-service": EMERGENCY_SERVICE_CONTENT,
  electrician: ELECTRICIAN_CONTENT,
  "ac-repair": AC_REPAIR_CONTENT,
  "ac-maintenance": AC_MAINTENANCE_CONTENT,
  "ac-installation": AC_INSTALLATION_CONTENT,
  "heating-repair": HEATING_REPAIR_CONTENT,
  "heating-maintenance": HEATING_MAINTENANCE_CONTENT,
  "heating-installation": HEATING_INSTALLATION_CONTENT,
  "hp-repair": HP_REPAIR_CONTENT,
  "hp-maintenance": HP_MAINTENANCE_CONTENT,
  "hp-installation": HP_INSTALLATION_CONTENT,
  "mini-split-repair": MINI_SPLIT_REPAIR_CONTENT,
  "mini-split-maintenance": MINI_SPLIT_MAINTENANCE_CONTENT,
  "mini-split-installation": MINI_SPLIT_INSTALLATION_CONTENT,
  "air-filter": AIR_FILTER_CONTENT,
  thermostat: THERMOSTAT_CONTENT,
  "uv-air-scrubber": UV_AIR_SCRUBBER_CONTENT,
  "air-duct-cleaning": AIR_DUCT_CLEANING,
};
