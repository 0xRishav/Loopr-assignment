import {
  addWorkOrderApi,
  fetchWorkOrderDataApi,
} from "./features/workOrder/WorkOrderApi";
import WorkOrderData from "./db/db";

describe("fetchWorkOrder() using promises", () => {
  it("should load work order data", async () => {
    const res = await fetchWorkOrderDataApi();
    expect(res).toBeDefined();
    expect(res).toEqual(WorkOrderData);
  });
});

describe("addWorkOrder() using promises", () => {
  it("should add work order", async () => {
    const res = await addWorkOrderApi();
    expect(res).toBeDefined();
    expect(res).toEqual([
      ...WorkOrderData,
      {
        document_name: "13325234532532",
        upload_date: "2022-08-05T05:28:11.269Z",
        upload_percentage: "100",
      },
    ]);
  });
});
