import { types } from "mobx-state-tree";

const FormStore = types
  .model("FormStore", {
    title: types.string,
    description: types.string,
  })
  .actions((self) => ({
    setFormData(formData: { title: string; description: string }) {
      self.title = formData.title;
      self.description = formData.description;
    },
  }));

export default FormStore;
