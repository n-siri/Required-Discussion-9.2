const { reverse } = require("./string-utils");

describe("String Utilities", () => {
  test("The function 'reverse' should reverse a string", () => {
    
      expect(reverse("hello")).toBe("olleh")
   
      expect(reverse("racecar")).toBe("racecar")

      expect(reverse("a")).toBe("a")
    
      expect(reverse("123")).toBe("321")
    
    

  });
});
