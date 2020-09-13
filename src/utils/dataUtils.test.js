const { expect } = require("chai");
const { default: dataUtils } = require("./dataUtils");
import launchData from "./testData";

describe("DataUtils testing", () => {
  test("formatLaunchData should format Launch Data", () => {
    const result = dataUtils.formatLaunchData(launchData);

    expect(result).to.be.a("array");
    expect(result.length).to.be.equal(3);

    expect(result[0]).to.be.an("object");
    expect(result[0].missionId).to.be.an("array");
    expect(result[0].missionId.length).to.be.equal(0);

    expect(result[0].launchYear).to.be.equal("2006");
    expect(result[0].launchSuccess).to.be.equal(false);
    expect(result[0].landSuccess).to.be.equal(null);
    expect(result[0].missionName).to.be.equal("FalconSat");
    expect(result[0].flightNumber).to.be.equal(1);
  });

  test("formatLaunchData should return empty array on empty launch Data", () => {
    const result = dataUtils.formatLaunchData([]);

    expect(result).to.be.a("array");
    expect(result.length).to.be.equal(0);
  });

  test("createSearchString should create valid search string", () => {
    const result = dataUtils.createSearchString("2006", "true", "false");

    expect(result).to.be.a("string");
    expect(result).to.not.equal(null);

    expect(result).to.be.equal(
      "?&launch_year=2006&launch_success=true&land_success=false"
    );
  });
});
