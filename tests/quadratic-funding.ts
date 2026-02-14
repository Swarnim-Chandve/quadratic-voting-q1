import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { QuadraticVoting } from "../target/types/quadratic_voting";

describe("quadratic-voting", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.quadraticVoting as Program<QuadraticVoting>;

});
